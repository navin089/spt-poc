import React from 'react'
import Config from "../config/OptionCalls.json";
import ConfigData from "../config/OptionCallsData.json"

function OptionCalls() {
  return (
    <div className='p-5 h-screen bg-gray-100'>
           <div className='overflow-auto rounded-lg shadow-md'>
           <table className='w-full' style={Config.style}>
                    
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr className="rounded-lg text-sm  font-medium text-gray-700 text-center" >
                             {Config.children.map(item =>  (
                                 <>
                                     { item.visibility === true &&   <th style={item.style}>{item.name}</th>      }
                                 </>
                             ))}
                           
           
                        </tr>
                    </thead>
                    <tbody className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-normal text-gray- divide-y divide-gray-100">
                        {/* THE EXPERIMENTAL DATA POPULTION */}
                        {
                            ConfigData.data.map((data, index) => (
                            <tr key={index} className="hover:bg-gray-100 border-b border-gray-200 bg-white text-center py-4">
                             { Config.children[0].visibility === true && <td className="tbl-cell-pt">{data.stock}</td>   }
                             { Config.children[1].visibility === true && <td className="tbl-cell-pt">{data.stockCat}</td>}
                             { Config.children[2].visibility === true &&  <td className="tbl-cell-pt">{data.cmp}</td>}
                             { Config.children[3].visibility === true &&  <td className="tbl-cell-pt">{data.ot}</td>}
                             { Config.children[4].visibility === true &&  <td className="tbl-cell-pt">{data.price}</td>}
                             { Config.children[5].visibility === true && <td className="tbl-cell-pt">{data.target}</td>}
                             { Config.children[6].visibility === true &&  <td className="tbl-cell-pt">{data.disclosure}</td>}
                        </tr>
                            ))
                        }

                       

                    </tbody>
                </table>
           </div>
           
       </div>
  )
}

export default OptionCalls; 