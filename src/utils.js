export function extractLaravelErrors(resp) {

    if (typeof resp.response.data.errors !== 'undefined') {
        const firstKey = Object.keys(resp.response.data.errors)[0];
        if (firstKey && resp.response.data.errors[firstKey] && resp.response.data.errors[firstKey][0]) {
            return resp.response.data.errors[firstKey][0];
        }
    }

    console.log('.. wtf', resp.response.data.errors);
    return 'ir errors';
}
