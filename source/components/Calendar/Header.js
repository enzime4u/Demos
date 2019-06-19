import $ from "./style.css";

export default ({ label, next, prev }) => {
  const prevArrowClasses = `${$.arrow} ion-chevron-left`;
  const nextArrowClasses = `${$.arrow} ion-chevron-right`;

  return (
    <div className={$.header}>
      {prev != null ? (
        <div className={prevArrowClasses} onClick={prev} />
      ) : null}
      {next != null ? (
        <div className={nextArrowClasses} onClick={next} />
      ) : null}
      <div
        className={$.label}
        style={{ position: prev && next ? "absolute" : "relative" }}
      >
        {label}
      </div>
    </div>
  );
};
