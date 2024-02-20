export default function BreadcrumbCom({
  paths = [{ name: "home", path: "/" }],
  isBecomeSeller,
}) {
  return (
    <>
      {paths && paths.length > 0 && (
        <div key={Math.random()}>
          <div
            className={`"breadcrumb-wrapper font-400 text-[13px] text-[var(--text-color)] ${
              isBecomeSeller ? "" : "mb-5"
            }  pt-5 print:hidden"`}
          >
            {paths.map((path) => (
              <span key={Math.random()}>
                <a href={path.path}>
                  <span className="mx-1 capitalize">{path.name}</span>
                </a>
                <span className="sperator">/</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
