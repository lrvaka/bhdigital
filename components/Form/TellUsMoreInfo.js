const TellUsMoreInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full  h-full absolute top-0 left-0 p-5 lg:p-10">
      <div className="text-2xl lg:text-3xl mb-4 text-center">
        Tell us about your company...
      </div>
      <div className="flex flex-col gap-2 w-full">
        <input
          className="w-full bg-rose-100 rounded-sm p-2 text-xl text-black"
          type="input"
          placeholder="Please provide us with a few details about what your company does..."
          value={formData.tellUsMore}
          onChange={(e) =>
            setFormData({ ...formData, tellUsMore: e.target.value })
          }
        />

        <div className="flex justify-center gap-20">
          <button
            className=" w-fit bg-rose-100 text-black rounded-sm p-2 text-xl mt-10 self-center"
            onClick={() => {
              setPage(page - 1);
              setX(-1000);
            }}
          >
            Back
          </button>
          <button
            className=" w-fit bg-rose-100 text-black rounded-sm p-2 text-xl mt-10 self-center"
            onClick={() => {
              setPage(page + 1);
              setX(1000);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TellUsMoreInfo;