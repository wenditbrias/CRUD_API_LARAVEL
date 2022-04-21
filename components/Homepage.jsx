import {  useContextHandle } from '../context/Context';

const Homepage = () => {
  const { profile,delete_handle,put_handle,filter_user } = useContextHandle();

  if(!profile || profile.length == 0) {
    return (
        <div className="w-full text-center mt-10">
         <h1 className="text-3xl font-bold">Loading..</h1>
        </div>
      )
  }

  return (
    <div className="w-full px-7">
      <div className="w-[400px]">
        <input
         onChange={(e)=>filter_user(e)}
          className="border text-gray-800 rounded-md border-gray-200 py-2 px-3 w-full"
          type="search"
          placeholder="find user"
        />
      </div>
      <div className="w-full mt-10 grid grid-cols-2 gap-x-10 gap-y-7">
       {profile && profile.map((data , id) => {
          let skillArr = data.skills.split(',');
          return (
           <div className="w-full">
            <div className="w-full flex items-start justify-between">
             <img src={data.foto} alt={data.nama} className="object-cover w-[40%] h-[200px]"/>
             <div className="w-[56%]">
               <h3 className="text-lg border-b pb-3 font-semibold">Nama: {" " } {data.nama}</h3>
               <h3 className="text-base border-b pb-3 font-medium my-2">Kelas: {" " } {data.kelas}</h3>
               <h3 className="text-base border-b pb-3 font-medium">Usia: {" " } {data.usia}</h3>
               <div className="mt-3">
                <button onClick={()=>delete_handle(data.id)} className="py-2 px-3 bg-red-500 text-white rounded-md mr-3">Delete</button>
                <button onClick={()=>put_handle(data)} className="py-2 px-3 bg-green-500 text-white rounded-md">Update</button>

               </div>
             </div>
            </div>
            <ul className="list-none mt-7 grid grid-cols-4 gap-3">
             {skillArr?.map((item,index)=> (<button className="text-sm mb-2 font-medium rounded-lg lowercase text-white bg-blue-500 py-2 " key={index}>{item}</button>))}
            </ul>
           </div>
          )
       })}
      </div>
    </div>
  );
};

export default Homepage;
