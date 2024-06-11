import { useState } from "react";
import { Child } from "../ChildComponent/Child";

export type dataObj = {
  value1?: string;
  value2?: string;
};

export const Parent = () => {
  const [data, setData] = useState<dataObj>({
    value1: "alpha",
    value2: "beta",
  });

  return (
    <>
      <label htmlFor="value1">Value 1 : </label>
      <input
        type="text"
        id="value1"
        name="value1"
        onChange={(e) =>
          setData((prev) => ({ ...prev, value1: e.target.value }))
        }
        className="border border-solid border-black"
      />
      <label htmlFor="value2">Value 2 : </label>
      <input
        type="text"
        id="value2"
        name="value2"
        onChange={(e) =>
          setData((prev) => ({ ...prev, value2: e.target.value }))
        }
        className="border border-solid border-black"
      />
      <div className="flex flex-col gap-5">
        <div className="text-3xl">Data from the Parent Component</div>
        <div>
          {" "}
          Value 1 : <span>{data.value1}</span>
        </div>
        <div>
          Value 2 : <span>{data.value2}</span>
        </div>
      </div>
      <Child data={data} />
    </>
  );
};
