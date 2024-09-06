import axios from "axios";
import { useState, useEffect } from "react";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

export default function Home() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const fetchData = async () => {
    const res = await axios.get(
      `https://freetestapi.com/api/v1/students?search=${searchName}`
    );
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [searchName]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="flex flex-col items-center pb-7">
      <div className="flex flex-col w-full gap-6 px-[4em] md:px-[7em] py-[2em] mt-2">
        <div className="flex flex-wrap gap-2 justify-between items-center w-full">
          <p className="text-2xl md:text-3xl font-semibold text-cyan-700">
            Students
          </p>
          <div className="float-left">
            <input
              type="text"
              placeholder="search student by name"
              className="border border-cyan-500 outline-cyan-600 text-slate-600 p-2 py-[0.4em] rounded-sm"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col w-full shadow-md rounded-sm overflow-x-auto pageScroll">
          <Records data={currentRecords} />
        </div>

        <div className="xs:flex xs:justify-center">
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
