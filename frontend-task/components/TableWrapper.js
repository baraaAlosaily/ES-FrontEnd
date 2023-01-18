import React,{useState,useEffect} from 'react'
import { useAppContext } from '../context/appContext';
import { Table } from 'antd';
import { columns } from '../assets/columns';


function TableWrapper() {
  const { results ,getAllData} = useAppContext();
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    return () => {
      getAllData();
      }
  }, []);


  return (
    <div>
      	<Table
					columns={columns}
          rowKey={results?.result?.auditLog?.logId}
					dataSource={results?.result?.auditLog}
					pagination={{
						current: page,
						pageSize: 10,
						onChange: (page) => {
							setPage(page);
						},
					}}
				/>
		</div>
  )
}

export default TableWrapper