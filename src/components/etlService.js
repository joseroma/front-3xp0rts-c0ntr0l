const axios = require('axios').default;

const baseUrl = 'http://35.214.211.35:5000/api';

export async function doEtl(params) {
    console.log('in do etl');
    const response =
      await axios.post(
          `${baseUrl}/etl`, 
          params, 
          { 
              headers: 
              { 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Allow': 'POST'
            }
        }
    );
      return response;
}

export async function saveEtlHistory(params) {
    const response =
    await axios.post(`${baseUrl}/etl/insertInHistory`, params, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
    return response;
}

export async function getEtlLog() {
    const response =
        await axios.get(`${baseUrl}/etl/log?num_lines=19`);
    return response;
}

export async function iterativeLog(delay, callback) {
    let status = '';
    let response = [];
    let prevResponse = [];

    while (status !== 'finished') {
        response = getEtlLog();
        console.log(response.log)
        if (response.log!==""){
            setTimeout(()=>{callback(response.log);}, delay);
            prevResponse = response; 
            status = response.status;
        }
        
    }
}

export async function getHistory(startItem, endItem) {
    const response =
    await axios.post(
        `${baseUrl}/etl/getFromHistory`, 
        {
            'start_item': startItem,
            'end_item': endItem
        }, 
        { 
            headers: 
            { 
              'Content-Type': 'application/json', 
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Allow': 'POST'
          }
      }
  );
    return response;
}