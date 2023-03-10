const router = require('express').Router();
const adminController = require('../controllers/adminController');
const {uploadSingle, uploadMultiple} = require('../middlewares/multer');

router.get('/signin', adminController.viewSignIn);
router.post('/signin', adminController.actionSignin);
router.get('/dashboard', adminController.viewDashboard);

// Endpoint Category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

// Endpont Bank
router.get('/bank', adminController.viewBank);
router.post('/bank', uploadSingle, adminController.addBank);
router.put('/bank', uploadSingle, adminController.editBank);
router.delete('/bank/:id', adminController.deleteBank);

// Endpont Item
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

// Endpoint Detail Item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post('/item/add/feature', uploadSingle, adminController.addFeature);
router.put('/item/update/feature', uploadSingle, adminController.editFeature);
router.delete('/item/:itemId/feature/:id', uploadSingle, adminController.deleteFeature);

router.post('/item/add/activity', uploadSingle, adminController.addActivity);


// Endpoint Booking
router.get('/booking', adminController.viewBooking);

module.exports = router;