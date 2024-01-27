
const CouponsModle= require('../models/coupons');

const  getCoupons = async (req, res,next ) => {
    try {
        let findCoupons = await CouponsModle.find();
        res.status(200).json({deta:findCoupons});
    }catch (err) {
        res.status(400).json(err);
    }
}

const getByCouponID = async(req, res, next) => {
    const id = req.params.id;
   try{
    let coupon = await CouponsModle.findOne({ coupon_id: id }); 
    if(coupon){
        res.status(200).json(coupon);
    }else{
        res.status(400).json({message:"not found"})
    }
   }catch(err){
    res.status(500).json({message: err.message});
   }
  }

const AddCoupon =async (req, res,next) =>{
    let Deta = req.body;
try{
    let newCoupon = await CouponsModle.create(Deta);
    res.status(200).json({"Done": true});
}catch(e){
    res.status(400).json(e)
}
}

const EditCoupon = async (req, res, next) => {
    let id = req.params.id;
    let body=req.body;
    try {
        let coupon = await CouponsModel.updateOne({ coupon_id: id }, body);
    }catch(e){
        res.status(400).json(e)
    }
}


const deleteCoupon =async(req, res, next) => {
    const Id = req.params.id;
    try{
      const coupon= await CouponsModle.findOneAndDelete({coupon_id:Id})
  
      res.status(200).json(coupon)
  
  }catch(err){
      res.status(500).json(err)
  }
     
    }



module.exports ={getCoupons,AddCoupon,EditCoupon,getByCouponID,deleteCoupon}