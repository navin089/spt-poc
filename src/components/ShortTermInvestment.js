import React from 'react';
import Config from "../config/ShortTermInvestment.json";
import ConfigData from "../config/ShortTermData.json"

function ShortTermInvestment() {


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
                           
                          {/* { Config.children[0].visibility === true &&  <th style={Config.children[0].style}>Stock</th>    }
                           { Config.children[1].visibility === true &&  <th style={Config.children[1].style}>Stock Category </th>   }
                           { Config.children[2].visibility === true &&   <th style={Config.children[2].style}>CMP</th>      }
                           {  Config.children[3].visibility === true &&  <th style={Config.children[3].style}>Buy/Sell</th>   }
                           { Config.children[4].visibility === true &&   <th style={Config.children[4].style}>Price</th>      }
                           { Config.children[5].visibility === true &&   <th style={Config.children[5].style}>Target</th>     }
                         { Config.children[6].visibility === true &&  <th style={Config.children[6].style}>Disclosure</th>     } */}
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
                             { Config.children[3].visibility === true &&  <td className="tbl-cell-pt">{data.bs}</td>}
                             { Config.children[4].visibility === true &&  <td className="tbl-cell-pt">{data.price}</td>}
                             { Config.children[5].visibility === true && <td className="tbl-cell-pt">{data.target}</td>}
                             { Config.children[6].visibility === true &&  <td className="tbl-cell-pt">{data.disclosure}</td>}
                        </tr>
                            ))
                        }

                        {/* <tr className="hover:bg-gray-100 border-b border-gray-200 bg-white text-center py-4">
                            <td className="tbl-cell-pt">Adano Willmar</td>
                            <td className="tbl-cell-pt">Large Cap</td>
                            <td className="tbl-cell-pt">379.70</td>
                            <td className="tbl-cell-pt">Buy</td>
                            <td className="tbl-cell-pt">414 (11th Feb @ 10.35 pm)</td>
                            <td className="tbl-cell-pt">414 (31st Mar)</td>
                            <td className="tbl-cell-pt">Have Interest</td>
                        </tr>
                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4 text-center bg-gray-50">
                            <td className="tbl-cell-pt"> PatelEng</td>
                            <td className="tbl-cell-pt">Micro Cop</td>
                            <td className="tbl-cell-pt">25.15</td>
                            <td className="tbl-cell-pt">Buy</td>
                            <td className="tbl-cell-pt">31 (5th Jan @ 02.01 pm)</td>
                            <td className="tbl-cell-pt">33 (31st Mar)</td>
                            <td className="tbl-cell-pt">Have Interest</td>
                        </tr>

                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4 text-center bg-white">
                            <td className="tbl-cell-pt">CG Power</td>
                            <td className="tbl-cell-pt">Mid Corp</td>
                            <td className="tbl-cell-pt">171.00</td>
                            <td className="tbl-cell-pt">Buy</td>
                            <td className="tbl-cell-pt">241 (11th Feb @ 01.59 pm)</td>
                            <td className="tbl-cell-pt">343 (31st Mar)</td>
                            <td className="tbl-cell-pt">Have Interest</td>
                        </tr>

                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4 text-center bg-gray-50">
                            <td className="tbl-cell-pt ">Zee Ent</td>
                            <td className="tbl-cell-pt ">Mid Corp</td>
                            <td className="tbl-cell-pt ">228.90</td>
                            <td className="tbl-cell-pt ">Buy</td>
                            <td className="tbl-cell-pt ">144 (17th Feb @ 03.10 pm)</td>
                            <td className="tbl-cell-pt ">215 (31st Mar)</td>
                            <td className="tbl-cell-pt ">Have Interest</td>
                        </tr>

                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4 text-center bg-white">
                            <td className="tbl-cell-pt ">Shipping Power</td>
                            <td className="tbl-cell-pt ">Small Corp</td>
                            <td className="tbl-cell-pt ">103.95</td>
                            <td className="tbl-cell-pt ">Buy</td>
                            <td className="tbl-cell-pt ">123 (16th Feb @ 11.35 am)</td>
                            <td className="tbl-cell-pt ">343 (31st Mar)</td>
                            <td className="tbl-cell-pt ">Have Interest</td>
                        </tr>

                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4 text-center bg-gray-50">
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Orient Cement</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Small Corp</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">144.70</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Buy</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">216 (14th Feb @ 12.25 pm)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">156 (31st Mar)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">No Interest</td>
                        </tr>

                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4 text-center bg-white">
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Jain Irrigation</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Micro Cop</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">39.85</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Buy</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">201 (19th Feb @ 01.01 pm)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">193 (31st Mar)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Have Interest</td>
                        </tr>

                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4 text-center bg-gray-50">
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Wheels India</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Micro Cop</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">593.05</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Buy</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">414 (04th Mar @ 11.01 am)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">55 (30th Jun)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Have Interest</td>
                        </tr>

                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4 text-center bg-white">
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Bank Of Maharashtra</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Mid Corp</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">17.80</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Buy</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">541 (11th Feb @ 02.35 pm)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">1050 (31st Mar)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Have Interest</td>
                        </tr> */}

                        {/* <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Hind Copper</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Mid Corp</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">117.60</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Buy</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">154 (23th Mar @ 12.35 pm)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">28.5 (31st Mar)</td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">Have Interest</td>
                        </tr> */}

                    </tbody>
                </table>
           </div>
           
       </div>
    )
}

export default ShortTermInvestment;