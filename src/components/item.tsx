import React from "react";
import {todoType} from "@src/components/todoType";

type ListType = todoType & {}

export const Item: React.FC<ListType> = ({id,todo}) => {
  console.log(id);
  return (
    <div className="flex justify-between">
      <div className="px-3 py-2 bg-red-50 w-full">{todo}</div>
      <div className="ml-2 flex-shrink-0">
        <button className="border border-solid border-red-400 rounded bg-red-600 px-3 py-2 text-white font-bold hover:bg-red-700 focus:bg-red-700" type="button">削除する</button>
      </div>
    </div>
  )
}
