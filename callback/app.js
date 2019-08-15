// function dohomework(tugas) {
//     alert(`mengerjakan tugas ${tugas} dari kode.`);
// }
// dohomework('Async javascript');


// callback
// function dohomework(tugas, callback) {
//     alert(`memngerjakan tugas ${tugas} dari kode.`);
//     callback();
// }
// dohomework('Async javascript', function(){
//     alert('selesai mengerjakan tugas');
// });

function dohomework(tugas, callback) {
    alert(`memngerjakan tugas ${tugas} dari kode.`);
    callback();
}
function alertFinished() {
    alert('selesai mengerjakan tugas');
}
dohomework('Async javascript', alertFinished);



// function myfunction(input, function(err, data) {
    
// });