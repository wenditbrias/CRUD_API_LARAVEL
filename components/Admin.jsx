import {  useContextHandle } from '../context/Context';

const Admin = () => {
	const { query , setQuery,post_handle ,btn} = useContextHandle();
	return (
		<div className="admin w-full px-7">
		<h2 className="text-2xl font-bold">Add-Data</h2>
		  <div className="form mt-5 w-[400px]">
		   <div className="w-full mb-3">
		    <label>Nama</label>
		    <input value={query.nama} name="nama" onChange={(e)=>setQuery({...query,[e.target.name]:e.target.value})} type="text"  className="mt-2 py-2 px-3 rounded-md w-full border border-gray-200"/>
		   </div>
		    <div className="w-full mb-3">
		    <label>Kelas</label>
		    <input value={query.kelas} name="kelas" onChange={(e)=>setQuery({...query,[e.target.name]:e.target.value})} type="text" className="w-full py-2 px-3 rounded-md mt-2 border border-gray-200"/>
		   </div>
		    <div className="w-full mb-3">
		    <label>Usia</label>
		    <input value={query.usia} type="text" name="usia" onChange={(e)=>setQuery({...query,[e.target.name]:e.target.value})}  className="w-full py-2 px-3 rounded-md mt-2 border border-gray-200"/>
		   </div>
		    <div className="w-full mb-3">
		    <label>Skills</label>
		    <input value={query.skills} type="text" name="skills" onChange={(e)=>setQuery({...query,[e.target.name]:e.target.value})}   className="w-full py-2 px-3 rounded-md mt-2 border border-gray-200"/>
		   </div>
		    <div className="w-full mb-3" >
		    <label>Foto(URL)</label>
		    <input value={query.foto} type="text" name="foto" onChange={(e)=>setQuery({...query,[e.target.name]:e.target.value})}  className="w-full py-2 px-3 rounded-md mt-2 border border-gray-200"/>
		   </div>
		   <button onClick={post_handle} className="w-full mt-4 text-white py-2 bg-blue-500 rounded-md font-medium">{btn}</button>
		  </div>
		</div>
	)
}

export default Admin;