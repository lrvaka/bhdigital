const LeadSourceInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const selectLeadSourceHandler = (e) => {
    setFormData({ ...formData, leadSource: e.target.value });
    setPage(page + 1);
    setX(1000);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 p-5 lg:p-10">
      <div className="text-2xl lg:text-3xl mb-4 text-center">
        Where do the majority of your CURRENT leads come from?
      </div>
      <div className="flex flex-col gap-2 w-full">
        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="💬 Word of mouth"
          value="💬 Word of mouth"
          onClick={selectLeadSourceHandler}
        />

        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Google organic"
          value="🔎 Google organic"
          onClick={selectLeadSourceHandler}
        />

        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Google ads"
          value="💰 Google ads"
          onClick={selectLeadSourceHandler}
        />

        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Facebook ads"
          value="📱 Facebook ads"
          onClick={selectLeadSourceHandler}
        />

        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Social media"
          value="👍 Social media"
          onClick={selectLeadSourceHandler}
        />

        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Another agency/lead provider"
          value="🥸 Another agency/lead provider"
          onClick={selectLeadSourceHandler}
        />

        <input
          className="w-full bg-rose-100 rounded-sm p-2 text-black text-xl"
          type="input"
          placeholder="Lead source not mentioned? Enter lead source here!"
          value={formData.leadSource}
          onChange={(e) =>
            setFormData({ ...formData, leadSource: e.target.value })
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

export default LeadSourceInfo;
