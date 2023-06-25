import React from "react";
import style from "./review.article.form.module.scss";


export function ReviewersGuide() {
   return (
     <div className="container">
       <div className="guideName">
         <h3>Reviewers Guide</h3>
       </div>

       <div className="sectionTwo">
         <h4>A. Rate The Following</h4>
         <table className="ratings">
           <thead>
             <tr>
               <th>Area</th>
               <th>Excellent</th>
               <th>Good</th>
               <th>Acceptable</th>
               <th>Marginal</th>
               <th>Poor</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>Is the innovation of the research question adequate?</td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
             </tr>
             <tr>
               <td>
                 Does the paper demonstrate an adequate understanding of the
                 relevant literature in the field?
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
             </tr>
             <tr>
               <td>
                 Are the methods and results presented clearly and
                 appropriately?
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
             </tr>
             <tr>
               <td>Is the structure of the paper adequate?</td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
             </tr>
             <tr>
               <td>
                 Does the paper contain significant contribution adequate to
                 theory or practice?
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
               <td>
                 <input type="text" />
               </td>
             </tr>
           </tbody>
         </table>
       </div>

       <div className="sectionThree">
         <div>
           <h4>B. Recommendation</h4>
           <table className="recTable">
             <tbody>
               <tr>
                 <td>Accept</td>
                 <td>
                   <input type="text" />
                 </td>
               </tr>
               <tr>
                 <td>Accept with Minor Revision</td>
                 <td>
                   <input type="text" />
                 </td>
               </tr>
               <tr>
                 <td>Requires Major Revision</td>
                 <td>
                   <input type="text" />
                 </td>
               </tr>
               <tr>
                 <td>Reject</td>
                 <td>
                   <input type="text" />
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>

       <div className="sectionFour">
         <div>
           <h4>C. Additional Comments (Please make suggestions to author)</h4>
           <textarea name="comments" rows={5} cols={50}></textarea>
         </div>
       </div>
       <button>Submit</button>
     </div>
   );
 }

