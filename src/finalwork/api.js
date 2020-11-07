import axios from 'axios';

const DOMAIN = 'http://fs.mis.kuas.edu.tw/~C107156227/react-finaltern/api';

// activity 相關的 api
const activityRequest = axios.create({
    baseURL: DOMAIN + '/activity'
});
// category 相關的 api
const categoryRequest = axios.create({
    baseURL: DOMAIN + '/category'
});


// activity 相關的 api
export const apiActivityRead = Actid => activityRequest.get('/read.php', Actid)
export const apiActivityInsert = data => activityRequest.post('/insert.php', data)
export const apiActivityUpdate = data => activityRequest.post('/update.php', data)
export const apiActivityDelete = data => activityRequest.post('/delete.php', data)

// category 相關的 api
export const apiCategoryRead = () => categoryRequest.get('/read.php');