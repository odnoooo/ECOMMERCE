"use client";
export default function Page() {
  return (
    <div className="bg-[#f0f1f3] h-[848px] p-5">
      <div className="w-[1040px] m-auto flex flex-col gap-[66px]">
        <div className="flex items-center  justify-center">
          <div className="w-8 h-8 rounded-full border border-gray-500  flex justify-center items-center">
            1
          </div>
          <div className="border border-gray-500  w-[80px]"></div>
          <div className="w-8 h-8 rounded-full border border-gray-500  flex justify-center items-center">
            2
          </div>
          <div className="border border-gray-500 w-[80px]"></div>
          <div className="w-8 h-8 rounded-full border border-gray-500  flex justify-center items-center">
            3
          </div>
        </div>

        <div className="flex w-[687px] gap-4 rounded-xl bg-white m-auto">
          <div className="p-6 flex flex-col gap-4 w-full ">
            <div className="flex gap-1 items-center">
              <h1 className="text-xl font-semibold">3. Төлбөр төлөлт</h1>
            </div>
            <div className="p-9 border ">
              <div>
                <div className="py-1 px-4 rounded-2xl bg-gray-">10:10</div>
              </div>
              <div className="relative text-center">
                <p>Төлөх боломжтой банкууд:</p>
                <div></div>
              </div>
            </div>

            <div className=" flex justify-between">
              <button className="rounded-2xl border px-8 py-1">Буцах</button>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
