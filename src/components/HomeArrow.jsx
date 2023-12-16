import React from "react";

const HomeArrow = (props) => {
  const isFirstPage = props.currentPage === 1;

  return (
    <>
      <div
        className="arrow-content flex flex-row mt-5 lg:w-[500px] items-center mb-6 sm:w-[250px]"
        style={
          isFirstPage
            ? { justifyContent: "end" }
            : { justifyContent: "space-between" }
        }
      >
        {props.currentPage > 1 && (
          <div
            onClick={props.handleClickLast}
            className="flex items-center justify-center border-solid border-2 w-8 h-8 border-white back-arrow text-white text-center content-center rounded-md text-lg"
          >
            ←
          </div>
        )}

        <div
          onClick={props.handleClickNext}
          className="flex items-center justify-center border-solid border-2 w-8 h-8 border-white next-arrow text-white text-center rounded-md text-lg"
        >
          {" "}
          →{" "}
        </div>
      </div>
    </>
  );
};

export default HomeArrow;
