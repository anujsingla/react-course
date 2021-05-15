import { useQuery } from "react-query";

const fetchUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  // throw new Error("error message");
  return "Data information";
};
export function ConditionalRender() {
  const { data, isError, isFetching } = useQuery("fetchData", fetchUsers, {
    retry: false,
  });

  const renderData = () => {
    if (isFetching) {
      return <div>Data is fetching</div>;
    } else if (isError) {
      return <div>Error in fetching Data</div>;
    } else {
      return <div>{data}</div>;
    }
  };

  return (
    <div>
      {renderData()}
      {isFetching && <div>Loading data</div>}
      {isFetching ? <div>Data 1</div> : <div>Data 2</div>}
    </div>
  );
}
