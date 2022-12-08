const ChallengeInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const selectChallengeHandler = (e) => {
    setFormData({ ...formData, challenge: e.target.value });
    setPage(page + 1);
    setX(1000);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 p-5 lg:p-10">
      <div className="text-2xl lg:text-3xl mb-4">
        What is your biggest challenge?
      </div>
      <div className="flex flex-col gap-2 w-full">
        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Lack of leads"
          value="😞 Lack of leads"
          onClick={selectChallengeHandler}
        />

        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Lead follow-up"
          value="☎️ Lead follow-up"
          onClick={selectChallengeHandler}
        />

        <input
          className="w-full bg-rose-600 rounded-sm p-2 text-xl cursor-pointer"
          type="button"
          placeholder="Poor quality leads"
          value="👎 Poor quality leads"
          onClick={selectChallengeHandler}
        />

        <input
          className="w-full bg-rose-100 rounded-sm p-2 text-black text-xl"
          type="input"
          placeholder="Challenge not mentioned? Enter challenge here!"
          value={formData.challenge}
          onChange={(e) =>
            setFormData({ ...formData, challenge: e.target.value })
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

export default ChallengeInfo;
