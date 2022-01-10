let app = require('./server');
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

chai.request(app)
.get('/')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, 'Hello to Even Arrays! Enter number less than 100 to see an array intergers')
        console.log('All tests for "Hello Even Arrays" have passed YAY!')
        return 
    }
})

chai.request(app)
.get('/1')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2]', "Response did not have the correct text")
        console.log('All tests for route /1 have passed')
        return
    }
})

chai.request(app)
.get('/2')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4]', "Response did not have the correct text")
        console.log('All tests for route /2 have passed')
        return
    }
})
chai.request(app)
.get('/3')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6]', "Response did not have the correct text")
        console.log('All tests for route /3 have passed')
        return
    }
})
chai.request(app)
.get('/4')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8]', "Response did not have the correct text")
        console.log('All tests for route /4 have passed')
        return
    }
})
chai.request(app)
.get('/5')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10]', "Response did not have the correct text")
        console.log('All tests for route /5 have passed')
        return
    }
})
chai.request(app)
.get('/6')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12]', "Response did not have the correct text")
        console.log('All tests for route /6 have passed')
        return
    }
})
chai.request(app)
.get('/7')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14]', "Response did not have the correct text")
        console.log('All tests for route /7 have passed')
        return
    }
})
chai.request(app)
.get('/8')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16]', "Response did not have the correct text")
        console.log('All tests for route /8 have passed')
        return
    }
})
chai.request(app)
.get('/9')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18]', "Response did not have the correct text")
        console.log('All tests for route /9 have passed')
        return
    }
})
chai.request(app)
.get('/10')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20]', "Response did not have the correct text")
        console.log('All tests for route /10 have passed')
        return
    }
})
chai.request(app)
.get('/11')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22]', "Response did not have the correct text")
        console.log('All tests for route /11 have passed')
        return
    }
})
chai.request(app)
.get('/12')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24]', "Response did not have the correct text")
        console.log('All tests for route /12 have passed')
        return
    }
})
chai.request(app)
.get('/13')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26]', "Response did not have the correct text")
        console.log('All tests for route /13 have passed')
        return
    }
})
chai.request(app)
.get('/14')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28]', "Response did not have the correct text")
        console.log('All tests for route /14 have passed')
        return
    }
})
chai.request(app)
.get('/15')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]', "Response did not have the correct text")
        console.log('All tests for route /15 have passed')
        return
    }
})
chai.request(app)
.get('/16')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32]', "Response did not have the correct text")
        console.log('All tests for route /16 have passed')
        return
    }
})
chai.request(app)
.get('/17')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34]', "Response did not have the correct text")
        console.log('All tests for route /17 have passed')
        return
    }
})

chai.request(app)
.get('/18')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36]', "Response did not have the correct text")
        console.log('All tests for route /18 have passed')
        return
    }
})

chai.request(app)
.get('/19')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38]', "Response did not have the correct text")
        console.log('All tests for route /19 have passed')
        return
    }
})
chai.request(app)
.get('/20')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]', "Response did not have the correct text")
        console.log('All tests for route /20 have passed')
        return
    }
})
chai.request(app)
.get('/21')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42]', "Response did not have the correct text")
        console.log('All tests for route /21 have passed')
        return
    }
})
chai.request(app)
.get('/22')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44]', "Response did not have the correct text")
        console.log('All tests for route /22 have passed')
        return
    }
})
chai.request(app)
.get('/23')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46]', "Response did not have the correct text")
        console.log('All tests for route /23 have passed')
        return
    }
})
chai.request(app)
.get('/24')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48]', "Response did not have the correct text")
        console.log('All tests for route /24 have passed')
        return
    }
})
chai.request(app)
.get('/25')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50]', "Response did not have the correct text")
        console.log('All tests for route /25 have passed')
        return
    }
})
chai.request(app)
.get('/26')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52]', "Response did not have the correct text")
        console.log('All tests for route /26 have passed')
        return
    }
})
chai.request(app)
.get('/27')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54]', "Response did not have the correct text")
        console.log('All tests for route /27 have passed')
        return
    }
})
chai.request(app)
.get('/28')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56]', "Response did not have the correct text")
        console.log('All tests for route /28 have passed')
        return
    }
})
chai.request(app)
.get('/29')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58]', "Response did not have the correct text")
        console.log('All tests for route /29 have passed')
        return
    }
})
chai.request(app)
.get('/30')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60]', "Response did not have the correct text")
        console.log('All tests for route /30 have passed')
        return
    }
})
chai.request(app)
.get('/31')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62]', "Response did not have the correct text")
        console.log('All tests for route /31 have passed')
        return
    }
})
chai.request(app)
.get('/32')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64]', "Response did not have the correct text")
        console.log('All tests for route /32 have passed')
        return
    }
})
chai.request(app)
.get('/33')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66]', "Response did not have the correct text")
        console.log('All tests for route /34 have passed')
        return
    }
})
chai.request(app)
.get('/34')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68]', "Response did not have the correct text")
        console.log('All tests for route /34 have passed')
        return
    }
})
chai.request(app)
.get('/35')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70]', "Response did not have the correct text")
        console.log('All tests for route /35 have passed')
        return
    }
})
chai.request(app)
.get('/36')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72]', "Response did not have the correct text")
        console.log('All tests for route /36 have passed')
        return
    }
})
chai.request(app)
.get('/37')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74]', "Response did not have the correct text")
        console.log('All tests for route /37 have passed')
        return
    }
})
chai.request(app)
.get('/38')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76]', "Response did not have the correct text")
        console.log('All tests for route /38 have passed')
        return
    }
})
chai.request(app)
.get('/39')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78]', "Response did not have the correct text")
        console.log('All tests for route /39 have passed')
        return
    }
})
chai.request(app)
.get('/40')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80]', "Response did not have the correct text")
        console.log('All tests for route /40 have passed')
        return
    }
})
chai.request(app)
.get('/41')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82]', "Response did not have the correct text")
        console.log('All tests for route /41 have passed')
        return
    }
})
chai.request(app)
.get('/42')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84]', "Response did not have the correct text")
        console.log('All tests for route /42 have passed')
        return
    }
})
chai.request(app)
.get('/43')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86]', "Response did not have the correct text")
        console.log('All tests for route /43 have passed')
        return
    }
})
chai.request(app)
.get('/44')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88]', "Response did not have the correct text")
        console.log('All tests for route /44 have passed')
        return
    }
})
chai.request(app)
.get('/45')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90]', "Response did not have the correct text")
        console.log('All tests for route /45 have passed')
        return
    }
})
chai.request(app)
.get('/46')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92]', "Response did not have the correct text")
        console.log('All tests for route /46 have passed')
        return
    }
})
chai.request(app)
.get('/47')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94]', "Response did not have the correct text")
        console.log('All tests for route /47 have passed')
        return
    }
})
chai.request(app)
.get('/48')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96]', "Response did not have the correct text")
        console.log('All tests for route /48 have passed')
        return
    }
})
chai.request(app)
.get('/49')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98]', "Response did not have the correct text")
        console.log('All tests for route /49 have passed')
        return
    }
})

chai.request(app)
.get('/50')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100]', "Response did not have the correct text")
        console.log('All tests for route /50 have passed')
        return
    }
})


chai.request(app)
.get('/51')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102]', "Response did not have the correct text")
        console.log('All tests for route /51 have passed')
        return
    }
})

chai.request(app)
.get('/52')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104]', "Response did not have the correct text")
        console.log('All tests for route /52 have passed')
        return
    }
})

chai.request(app)
.get('/53')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106]', "Response did not have the correct text")
        console.log('All tests for route /53 have passed')
        return
    }
})

chai.request(app)
.get('/54')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108]', "Response did not have the correct text")
        console.log('All tests for route /54 have passed')
        return
    }
})

chai.request(app)
.get('/55')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110]', "Response did not have the correct text")
        console.log('All tests for route /55 have passed')
        return
    }
})

chai.request(app)
.get('/56')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112]', "Response did not have the correct text")
        console.log('All tests for route /56 have passed')
        return
    }
})

chai.request(app)
.get('/57')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114]', "Response did not have the correct text")
        console.log('All tests for route /57 have passed')
        return
    }
})

chai.request(app)
.get('/58')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116]', "Response did not have the correct text")
        console.log('All tests for route /58 have passed')
        return
    }
})

chai.request(app)
.get('/59')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118]', "Response did not have the correct text")
        console.log('All tests for route /59 have passed')
        return
    }
})

chai.request(app)
.get('/60')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120]', "Response did not have the correct text")
        console.log('All tests for route /60 have passed')
        return
    }
})

chai.request(app)
.get('/61')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122]', "Response did not have the correct text")
        console.log('All tests for route /61 have passed')
        return
    }
})

chai.request(app)
.get('/62')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124]', "Response did not have the correct text")
        console.log('All tests for route /62 have passed')
        return
    }
})

chai.request(app)
.get('/63')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126]', "Response did not have the correct text")
        console.log('All tests for route /63 have passed')
        return
    }
})

chai.request(app)
.get('/64')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128]', "Response did not have the correct text")
        console.log('All tests for route /64 have passed')
        return
    }
})

chai.request(app)
.get('/65')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130]', "Response did not have the correct text")
        console.log('All tests for route /65 have passed')
        return
    }
})

chai.request(app)
.get('/65')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130]', "Response did not have the correct text")
        console.log('All tests for route /65 have passed')
        return
    }
})

chai.request(app)
.get('/66')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132]', "Response did not have the correct text")
        console.log('All tests for route /66 have passed')
        return
    }
})

chai.request(app)
.get('/67')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134]', "Response did not have the correct text")
        console.log('All tests for route /67 have passed')
        return
    }
})

chai.request(app)
.get('/68')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136]', "Response did not have the correct text")
        console.log('All tests for route /68 have passed')
        return
    }
})

chai.request(app)
.get('/69')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138]', "Response did not have the correct text")
        console.log('All tests for route /69 have passed')
        return
    }
})

chai.request(app)
.get('/70')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140]', "Response did not have the correct text")
        console.log('All tests for route /70 have passed')
        return
    }
})

chai.request(app)
.get('/71')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142]', "Response did not have the correct text")
        console.log('All tests for route /71 have passed')
        return
    }
})

chai.request(app)
.get('/72')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144]', "Response did not have the correct text")
        console.log('All tests for route /72 have passed')
        return
    }
})

chai.request(app)
.get('/73')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146]', "Response did not have the correct text")
        console.log('All tests for route /73 have passed')
        return
    }
})

chai.request(app)
.get('/74')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148]', "Response did not have the correct text")
        console.log('All tests for route /74 have passed')
        return
    }
})

chai.request(app)
.get('/75')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150]', "Response did not have the correct text")
        console.log('All tests for route /75 have passed')
        return
    }
})

chai.request(app)
.get('/76')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152]', "Response did not have the correct text")
        console.log('All tests for route /76 have passed')
        return
    }
})

chai.request(app)
.get('/77')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154]', "Response did not have the correct text")
        console.log('All tests for route /77 have passed')
        return
    }
})

chai.request(app)
.get('/78')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156]', "Response did not have the correct text")
        console.log('All tests for route /78 have passed')
        return
    }
})

chai.request(app)
.get('/79')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158]', "Response did not have the correct text")
        console.log('All tests for route /79 have passed')
        return
    }
})
chai.request(app)
.get('/80')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160]', "Response did not have the correct text")
        console.log('All tests for route /80 have passed')
        return
    }
})

chai.request(app)
.get('/81')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162]', "Response did not have the correct text")
        console.log('All tests for route /81 have passed')
        return
    }
})

chai.request(app)
.get('/82')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164]', "Response did not have the correct text")
        console.log('All tests for route /82 have passed')
        return
    }
})

chai.request(app)
.get('/83')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166]', "Response did not have the correct text")
        console.log('All tests for route /83 have passed')
        return
    }
})

chai.request(app)
.get('/84')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168]', "Response did not have the correct text")
        console.log('All tests for route /84 have passed')
        return
    }
})

chai.request(app)
.get('/85')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170]', "Response did not have the correct text")
        console.log('All tests for route /85 have passed')
        return
    }
})

chai.request(app)
.get('/86')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172]', "Response did not have the correct text")
        console.log('All tests for route /86 have passed')
        return
    }
})

chai.request(app)
.get('/87')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174]', "Response did not have the correct text")
        console.log('All tests for route /87 have passed')
        return
    }
})

chai.request(app)
.get('/88')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176]', "Response did not have the correct text")
        console.log('All tests for route /88 have passed')
        return
    }
})

chai.request(app)
.get('/89')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178]', "Response did not have the correct text")
        console.log('All tests for route /89 have passed')
        return
    }
})

chai.request(app)
.get('/90')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180]', "Response did not have the correct text")
        console.log('All tests for route /90 have passed')
        return
    }
})

chai.request(app)
.get('/91')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182]', "Response did not have the correct text")
        console.log('All tests for route /91 have passed')
        return
    }
})

chai.request(app)
.get('/92')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184]', "Response did not have the correct text")
        console.log('All tests for route /92 have passed')
        return
    }
})

chai.request(app)
.get('/93')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186]', "Response did not have the correct text")
        console.log('All tests for route /93 have passed')
        return
    }
})

chai.request(app)
.get('/94')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188]', "Response did not have the correct text")
        console.log('All tests for route /94 have passed')
        return
    }
})

chai.request(app)
.get('/95')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190]', "Response did not have the correct text")
        console.log('All tests for route /95 have passed')
        return
    }
})

chai.request(app)
.get('/96')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192]', "Response did not have the correct text")
        console.log('All tests for route /96 have passed')
        return
    }
})

chai.request(app)
.get('/97')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194]', "Response did not have the correct text")
        console.log('All tests for route /97 have passed')
        return
    }
})

chai.request(app)
.get('/98')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196]', "Response did not have the correct text")
        console.log('All tests for route /98 have passed')
        return
    }
})
chai.request(app)
.get('/99')
.end((error, response) => {
    if(error){
        console.log(error)
    }else{
        chai.assert.equal(response.status, 200, "Response was not OK")
        chai.assert.equal(response.text, '[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198]', "Response did not have the correct text")
        console.log('All tests for route /99 have passed')
        return
    }
})