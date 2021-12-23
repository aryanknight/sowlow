import React from 'react';
import Addbtn from '../../Images/btc1.png';

export default function QnA({question,answer,no}) {

    const expandAns =()=>{
        const allAns=document.getElementsByClassName("faq-ans");
        const allCircle=document.getElementsByClassName("add-circle");
        const ans=document.getElementsByClassName("faq-ans")[no];
        const circle=document.getElementsByClassName("add-circle")[no];
        if(ans.style.maxHeight){
            circle.style.transform = 'rotate(0deg)';
            ans.style.maxHeight= null;
        }else{
            circle.style.transform = 'rotate(135deg)';
            ans.style.maxHeight=ans.scrollHeight + "px";  
            for (var i=0;i<allAns.length;i++){
                if(i!=no){
                    allAns[i].style.maxHeight= null;
                    allCircle[i].style.transform = 'rotate(0deg)';
                }
            }
        }
    }
    return (
        <div className="faq-ques-ans" >
            <div className="faq-question" onClick={expandAns}>
                {question}
                <img src={Addbtn} className="add-circle" />
            </div>
            <div className="faq-ans">
                {answer}
                <br/><br/>
            </div>
        </div>
    )
}