import Header from "../components/Headers/Header";
import DataTable from "../components/Tables/DataTable";
function Index() {
  return (
    <div className="h-screen bg-gray-100 ">
      <Header>
        <div className="py-10">
          <div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <DataTable />
              {/* /End replace */}
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default Index;
