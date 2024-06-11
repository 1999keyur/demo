import { useEffect, useState } from "react";
import { dataObj } from "../ParentComponent/Parent";

export const Child = ({ data }: { data: dataObj }) => {
  const [childData, setChildData] = useState<dataObj>({
    value1: data.value1,
    value2: data.value2,
  });
  useEffect(() => {
    setChildData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <div className="text-3xl">Data from the Child Component</div>
      <label htmlFor="value1">Value 1 : </label>
      <input
        type="text"
        id="value1"
        name="value1"
        onChange={(e) =>
          setChildData((prev) => ({ ...prev, value1: e.target.value }))
        }
        className="border border-solid border-black"
      />
      <label htmlFor="value2">Value 2 : </label>
      <input
        type="text"
        id="value2"
        name="value2"
        onChange={(e) =>
          setChildData((prev) => ({ ...prev, value2: e.target.value }))
        }
        className="border border-solid border-black"
      />
      <div className="flex flex-col gap-5">
        <div>
          {" "}
          Value 1:<span>{childData.value1}</span>
        </div>
        <div>
          Value 2:<span>{childData.value2}</span>
        </div>
      </div>
    </>
  );
};
