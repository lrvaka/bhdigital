const IndustryInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const selectIndustryHandler = (e) => {
    setFormData({ ...formData, industry: e.target.value });
    setPage(page + 1);
    setX(1000);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 p-5 lg:p-10">
      <div className="text-2xl lg:text-3xl mb-4">What industry are you in?</div>
      <div className="flex flex-col gap-2 w-full">
        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Roofing"
          value="🛖 Roofing"
          onClick={selectIndustryHandler}
        />
        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Flooring"
          value="🪵 Flooring"
          onClick={selectIndustryHandler}
        />
        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Construction Management"
          value="📚 Construction Management"
          onClick={selectIndustryHandler}
        />
        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Electrical"
          value="⚡️ Electrical"
          onClick={selectIndustryHandler}
        />
        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Bathroom Renovation"
          value="🛁 Bathroom Renovation"
          onClick={selectIndustryHandler}
        />
        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Kitchen Renovation"
          value="🔪 Kitchen Renovation"
          onClick={selectIndustryHandler}
        />
        <input
          className="w-full bg-rose-100 rounded-sm p-2 text-black text-xl"
          type="input"
          placeholder="Industry not mentioned? Enter industry here!"
          value={formData.industry}
          onChange={(e) =>
            setFormData({ ...formData, industry: e.target.value })
          }
        />
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
  );
};

export default IndustryInfo;
