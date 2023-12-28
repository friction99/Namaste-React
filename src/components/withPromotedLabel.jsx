import React from 'react'
import RestCard from './RestCard'
const withPromotedLabel = (RestCard)=>{
    return (props)=>{
        const {resData} = props;
        const {aggregatedDiscountInfoV3} = resData;
        const data = aggregatedDiscountInfoV3?.header;
        return(
            <div className="">
                <label className='ml-4 p-2  bg-black shadow-md hover:shadow-lg text-white rounded-md relative top-8'>{data}</label>
                <RestCard {...props}/>
            </div>
        )
    }
}
export default withPromotedLabel;