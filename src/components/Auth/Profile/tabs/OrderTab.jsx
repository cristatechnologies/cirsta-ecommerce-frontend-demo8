import React from "react";
import axios from "axios";
import jsPDF from "jspdf";
import DateFormat from "../../../../../utils/DateFormat";
import Link from "next/link";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import settings from "../../../../../utils/settings";
import auth from "../../../../../utils/auth";
import { toast } from "react-toastify";

export default function OrderTab({ orders }) {
  const { currency_icon, logo } = settings();

  const getOrderPdfDetails = async (order_id) => {
    if (auth()) {
      axios
        .get(
          `${
            process.env.NEXT_PUBLIC_BASE_URL
          }api/user/order-show/${order_id}?token=${auth().access_token}`
        )
        .then((res) => {
          generatePDF(res.data.order);
        })
        .catch((error) => console.error(error));
    }
  };

  const generatePDF = async (data) => {
    const pdf = new jsPDF("p", "mm", "a4");

    try {
      if (data) {
        const {
          order_address,
          order_products,
          total_amount,
          shipping_cost,
          order_id,
          coupon_coast,
        } = data;
        let y = 20;
        const interFont = "assets/fonts/Inter-Regular.ttf";
        const fontSize = 12;
        pdf.addFileToVFS(interFont);
        pdf.addFont(interFont, "Inter", "normal");
        pdf.setFontSize(fontSize);
        pdf.setFont("Inter");

        if (settings) {
          // img.src = `${process.env.NEXT_PUBLIC_BASE_URL + settings.logo}`;
          // const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${settings.logo}`;
          const imgWidth = 30; // Set the width of the image
          const imgHeight = 12; // Set the height of the image
          const imgX = 10; // Set the X coordinate
          const imgY = 10; // Set the Y coordinate

          // Add the image to the PDF
          // pdf.addImage(img, "png", imgX, imgY, imgWidth, imgHeight);
          // var img2 = new Image();
          // img2.src =
          //   "data:image/jpeg;base64," +
          //   btoa(`${process.env.NEXT_PUBLIC_BASE_URL + logo}`);
          console.log("logo", logo);
          // const url =
          //   "https://demo1.extremehost.in/uploads/website-images/logo-2024-02-22-02-47-44-9752.jpg";
          // img2.src = url;
          // img2.crossOrigin = "anonymous";
          // img2.width = 30;
          // img2.height = 12;
          // console.log("img2", img2);

          // pdf.addImage(img2, 30, 12, 10, 10);
          var canvas = document.getElementById("myCanvas");
          var ctx = canvas.getContext("2d");
          var img = new Image();
          console.log("img", img);
          img.onload = function () {
            console.log("in");
            // Draw the image onto the canvas
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Get the canvas content as a data URL
            var canvasDataURL = canvas.toDataURL("image/png");
            // Add the canvas image to the PDF
            pdf.addImage(
              canvasDataURL,
              "PNG",
              0,
              0,
              canvas.width,
              canvas.height
            );
            // Draw a divider line below the image
            const dividerY = imgY + imgHeight + 5; // Set the Y coordinate for the divider
            const dividerWidth = pdf.internal.pageSize.width - 20; // Set the width of the divider
            const dividerX = 10; // Set the X coordinate for the divider

            const orangeColor = [216, 85, 27];
            pdf.setDrawColor(...orangeColor);
            pdf.setLineWidth(0.5); // Set the line width
            pdf.line(dividerX, dividerY, dividerX + dividerWidth, dividerY); // Draw the divider line
          };
          img.src = `${process.env.NEXT_PUBLIC_BASE_URL + logo}`;
        }

        y += 20;
        pdf.setFont("Inter", "bold");
        pdf.text(`Order ID:`, 10, y);
        pdf.setFont("Inter", "normal");
        pdf.text(`${order_id}`, 30, y);
        y += 10;

        pdf.setFont("Inter", "", "bold");
        pdf.text(`Shipping Address:`, 10, y);
        pdf.setFont("Inter", "", "normal");
        pdf.text(
          `${order_address.shipping_address} ${order_address.shipping_city} ${order_address.shipping_country}`,
          45,
          y
        );
        y += 15;

        pdf.setFont("Inter", "normal", "normal");

        // Create a table for order items
        const tableHeaders = ["Product Name", "Quantity", "Price", "Subtotal"];
        const tableData = order_products.map((item) => [
          item.product_name,
          item.qty,
          item.unit_price,
          (item.qty * item.unit_price).toFixed(2),
        ]);

        const startY = y;
        const startX = 10;
        const cellHeight = 10;

        pdf.setFillColor(245, 245, 254); // Set fill color for header

        // Calculate the width of the product name column dynamically based on the longest product name
        const maxWidthProductName = tableData.reduce(
          (max, item) =>
            Math.max(max, pdf.getStringUnitWidth(item[0]) * fontSize),
          0
        );
        const maxWidthQuantity = 30; // Maximum width for quantity column
        const actualPriceWidth = 50; // Width for the price column

        const remainingWidth =
          (pdf.internal.pageSize.width -
            startX -
            maxWidthQuantity -
            actualPriceWidth) /
          2;
        const actualProductNameWidth = Math.min(
          maxWidthProductName,
          remainingWidth
        );

        console.log("actualProductNameWidth", actualProductNameWidth);
        // Draw table headers
        pdf.rect(startX, startY, actualProductNameWidth, cellHeight, "F");
        pdf.rect(
          startX + actualProductNameWidth,
          startY,
          maxWidthQuantity,
          cellHeight,
          "F"
        );
        pdf.rect(
          startX + actualProductNameWidth + maxWidthQuantity,
          startY,
          actualPriceWidth,
          cellHeight,
          "F"
        );
        pdf.rect(
          startX + actualProductNameWidth + maxWidthQuantity + actualPriceWidth,
          startY,
          maxWidthQuantity,
          cellHeight,
          "F"
        );

        pdf.setTextColor(0, 0, 0); // Set text color for header
        pdf.text(tableHeaders[0], startX + 5, startY + 8);
        pdf.text(
          tableHeaders[1],
          startX + actualProductNameWidth + 5,
          startY + 8
        );
        pdf.text(
          tableHeaders[2],
          startX + actualProductNameWidth + maxWidthQuantity + 5,
          startY + 8
        );
        pdf.text(
          tableHeaders[3],
          startX +
            actualProductNameWidth +
            maxWidthQuantity +
            actualPriceWidth +
            5,
          startY + 8
        );

        y += cellHeight;

        const lighterBorderColor = [245, 245, 245];

        tableData.forEach((row) => {
          const borderWidth = 0.1;
          pdf.setLineWidth(borderWidth);
          pdf.setDrawColor(...lighterBorderColor);

          pdf.rect(
            startX,
            y,
            actualProductNameWidth,
            cellHeight + actualProductNameWidth / 2
          );
          pdf.rect(
            startX + actualProductNameWidth,
            y,
            maxWidthQuantity,
            cellHeight + actualProductNameWidth / 2
          );
          pdf.rect(
            startX + actualProductNameWidth + maxWidthQuantity,
            y,
            actualPriceWidth,
            cellHeight + actualProductNameWidth / 2
          );
          pdf.rect(
            startX +
              actualProductNameWidth +
              maxWidthQuantity +
              actualPriceWidth,
            y,
            maxWidthQuantity,
            cellHeight + actualProductNameWidth / 2
          );

          pdf.text(row[0], startX + 5, y + 8, {
            maxWidth: actualProductNameWidth - 10,
          });
          pdf.text(
            row[1].toString(),
            startX + actualProductNameWidth + 5,
            y + 8
          );
          pdf.text(
            `₹ ${row[2].toString()}`,
            startX + actualProductNameWidth + maxWidthQuantity + 5,
            y + 8
          );
          pdf.text(
            `₹ ${row[3].toString()}`,
            startX +
              actualProductNameWidth +
              maxWidthQuantity +
              actualPriceWidth +
              5,
            y + 8
          );

          y += cellHeight + actualProductNameWidth / 2;
        });

        y += 5;
        const shippingCostRow = {
          col1: "",
          col2: "",
          col3: "Shipping Cost:",
          col4: `₹ ${shipping_cost}`,
        };

        const discountRow = {
          col1: "",
          col2: "",
          col3: "Discount:",
          col4: `₹ ${coupon_coast}`,
        };

        const grandTotalRow = {
          col1: "",
          col2: "",
          col3: "Grand Total:",
          col4: `₹ ${total_amount.toFixed(2)}`,
        };

        const newTableData = [shippingCostRow, discountRow, grandTotalRow];

        // Loop through updated tableData and draw each row
        newTableData.forEach((row) => {
          const borderWidth = 0.1;
          const lightGrayColor = [200, 200, 200]; // Light gray color RGB values
          pdf.setLineWidth(borderWidth);
          pdf.setDrawColor(...lightGrayColor);
          pdf.setFont("Inter", "normal"); // Set Inter font and normal style for the table content
          pdf.text(row.col1, startX + 5, y + 8);
          pdf.text(
            row.col2.toString(),
            startX + actualProductNameWidth + 5,
            y + 8
          );
          pdf.text(
            row.col3.toString(),
            startX + actualProductNameWidth + maxWidthQuantity + 5,
            y + 8
          );
          pdf.text(
            row.col4.toString(),
            startX +
              actualProductNameWidth +
              maxWidthQuantity +
              actualPriceWidth +
              5,
            y + 8
          );

          y += cellHeight;
        });

        const barHeight = 20; // Adjust the height of the bar as needed
        const orangeColor = [216, 85, 27]; // Orange color RGB values

        const pageHeight = pdf.internal.pageSize.height;
        const barY = pageHeight - barHeight; // Set the Y coordinate for the bar

        pdf.setFillColor(...orangeColor); // Set fill color to orange
        pdf.rect(0, barY, pdf.internal.pageSize.width, barHeight, "F"); // Draw the orange bar

        // Save and download the PDF with dynamic name
        pdf.save(`Order_${order_id}.pdf`);
        toast.success("Successfully downloaded pdf");
      } else {
        console.log("No data fetched to generate PDF.");
        toast.error("No data fetched to generate PDF");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error(`Error generating PDF: ${error}`);
    }
  };

  return (
    <div>
      <div className="relative w-full overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* table heading */}
            <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
              <td className="py-4 block whitespace-nowrap text-center">
                {ServeLangItem()?.Order}
              </td>
              <td className="py-4 whitespace-nowrap text-center">
                {ServeLangItem()?.Date}
              </td>
              <td className="py-4 whitespace-nowrap text-center">
                Product Quantity
              </td>
              <td className="py-4 whitespace-nowrap text-center">
                {ServeLangItem()?.Amount}
              </td>
              <td className="py-4 whitespace-nowrap  text-center">
                {ServeLangItem()?.Action}
              </td>
            </tr>
            {/* table heading end */}
            {orders &&
              orders.length > 0 &&
              orders.map((item, i) => (
                <tr key={i} className="bg-white border-b hover:bg-gray-50">
                  <td className="text-center py-4">
                    <span className="text-lg text-qgray font-medium">
                      #{item.order_id}
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-qgray  whitespace-nowrap">
                      {DateFormat(item.created_at)}
                    </span>
                  </td>
                  {/*<td className="text-center py-4 px-2">*/}
                  {/*  <span className="text-sm rounded text-green-500 bg-green-100 p-2">*/}
                  {/*    Complated*/}
                  {/*  </span>*/}
                  {/*</td>*/}
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-[var(--text-color)] whitespace-nowrap px-2 ">
                      {item.product_qty}
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-[var(--text-color)] whitespace-nowrap px-2 ">
                      {currency_icon + item.total_amount}
                    </span>
                  </td>
                  <td className="py-4 flex justify-center">
                    <div className="flex space-x-2 rtl:space-x-reverse items-center">
                      {/* <Link href={`/order/${item.order_id}`}>
                        <div className="w-[116px] h-[46px] primary-bg text-[var(--text-color)] font-bold flex justify-center items-center cursor-pointer">
                          <span>{ServeLangItem()?.View_Details}</span>
                        </div>
                      </Link> */}
                      <canvas id="myCanvas" className="hidden"></canvas>
                      <div
                        className="w-[116px] h-[46px] primary-bg text-[var(--text-color)] font-bold flex justify-center items-center cursor-pointer"
                        onClick={() => getOrderPdfDetails(item.order_id)}
                      >
                        <span>Pdf bill</span>
                      </div>
                      <Link href={`/dispute-order/${item.order_id}`}>
                        <a rel="noopener noreferrer">
                          <div className=" w-[126px] h-[46px] flex justify-center items-center cursor-pointer bg-[var(--primary-color)] ml-2">
                            <div className="flex rtl:space-x-reverse space-x-2 items-center">
                              <span className="text-sm font-bold text-[var(--text-color)]">
                                Dispute Order
                              </span>
                            </div>
                          </div>
                        </a>
                      </Link>
                      {/*{item.order_status === "0" && (*/}
                      {/*  <button*/}
                      {/*    type="button"*/}
                      {/*    className="text-green-500 text-sm font-semibold"*/}
                      {/*  >*/}
                      {/*    Review*/}
                      {/*  </button>*/}
                      {/*)}*/}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
