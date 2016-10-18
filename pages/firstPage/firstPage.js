Page({
  data: {
    imgList: [{imgSrc:'http://dayu.oa.com/avatars/echottzhu/profile.jpg?1437197657'}]
  },
  uploadImg: function(){
    var that = this;
    console.log(this.imgSrc);
    wx.chooseImage({
      count: 9, 
      sourceType: ['album'],
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var list = [];
        for(var i = 0;i<tempFilePaths.length;i++){
          list[i] = {imgSrc:''};
          list[i].imgSrc = tempFilePaths[i];
        }
        //上传选择的照片
        that.setData({
          imgList: list
        })
      }
    })
  },
  onLoad: function () {
     
  }
})