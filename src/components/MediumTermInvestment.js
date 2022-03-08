import React from 'react';
import Config from '../config/MediumTermInvestment.json';
import ConfigData from '../config/MediumTermData.json';

function MediumTermInvestment() {
  return (
    <div className='p-5 h-screen bg-gray-100'>

      <div className='overflow-auto rounded-lg shadow-md'>
        <table className="w-full ">
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr className='rounded-lg text-sm  font-medium text-gray-700 text-center'>
            {Config.children.map(item =>  (
                  <>
                      { item.visibility === true && <th style={item.style}>{item.name}</th>      }
                  </>
            ))}
            {/* { Config.children[0].visibility === true &&  <th style={Config.children[0].style}>Stock Name</th>  }
            { Config.children[1].visibility === true &&  <th style={Config.children[1].style}>CMP</th>  }
            { Config.children[2].visibility === true &&  <th style={Config.children[2].style}>Price</th>  } 
            { Config.children[3].visibility === true &&   <th style={Config.children[3].style}>Target</th>  }
            { Config.children[4].visibility === true &&   <th style={Config.children[4].style}>Brief Info</th>  }
            { Config.children[5].visibility === true &&   <th style={Config.children[5].style}>Disclosure</th>   }
            { Config.children[6].visibility === true &&   <th style={Config.children[6].style}>Read More</th>   } */}
            </tr>
          </thead>

          <tbody className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-normal text-gray-700">

            {/* DATA POPULATION */}
            {
              ConfigData.data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b border-gray-200 py-4 bg-gray-50 text-center">
                 { Config.children[0].visibility === true && <td className="tbl-cell-pt">{item.stock}</td>  }
                { Config.children[1].visibility === true &&  <td className="tbl-cell-pt">{item.cmp}</td>  }
                { Config.children[2].visibility === true &&  <td className="tbl-cell-pt">{item.price}</td>  }
                { Config.children[3].visibility === true &&  <td className="tbl-cell-pt">{item.target}</td>  }
                { Config.children[4].visibility === true &&  <td className="tbl-cell-pt whitespace-normal" style={{ width: '100%', minWidth: '400px'}}>{item.info}</td>  }
                { Config.children[5].visibility === true &&  <td className="tbl-cell-pt">{item.disclosure}</td>  }
                { Config.children[6].visibility === true &&  <td className="tbl-cell-pt">
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer"
                      className='text-blue-700 underline'>{item.readmore}</a> 
                  </td>
               
                 }
                  </tr> 
              ))
            }

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default MediumTermInvestment;