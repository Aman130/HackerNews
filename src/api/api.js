import moment from 'moment'
import axios from 'axios'
const getItems=async(filter)=>{
    const sortBy=filter.sortBy
    const page=filter.page
    const query=filter.query
    const tag=filter.tag
    const sortFrom=filter.sortFrom

    var hitURL1="http://hn.algolia.com/api/v1/search_by_date?page=";
    if(sortBy==="Popularity") hitURL1="http://hn.algolia.com/api/v1/search?page=";
    hitURL1+=page.toString();
    if(hitURL1[hitURL1.length-1]!=='?') hitURL1+="&"

    if(query!==""){
        const queryString="query="+query;
        hitURL1+=queryString;
    }
    if(hitURL1[hitURL1.length-1]!=='?' && hitURL1[hitURL1.length-1]!=='&') hitURL1+="&"

    hitURL1+="tags="+tag

    if(sortFrom!=="All Time"){
        var createdAt;
        if(sortFrom==="Last 24h"){
            createdAt=moment().subtract(24,'hours');
        }else if(sortFrom==="Past Week"){
            createdAt=moment().day(-7);
        }else if(sortFrom==="Past Month"){
            createdAt=moment().subtract(1,'month')
        }else{
            createdAt=moment().subtract(1,'year')
        }
        hitURL1+=`&numericFilters=created_at_i>${createdAt.unix()}`
    }

    try{
        const data= await axios.get(hitURL1)
        return data.data;
    }catch(err){
        throw err;
    }
    
}

export default getItems