Page({
  data: {
    imgList: ['http://dayu.oa.com/avatars/echottzhu/profile.jpg?1437197657'],
    previewIndex:0,
    previewMode: false
  },
  uploadImg: function(){
    var that = this;
    wx.chooseImage({
      count: 9, 
      sourceType: ['album'],
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var list = [];
        for(var i = 0;i<tempFilePaths.length;i++){
          list[i] = tempFilePaths[i];
        }
        //上传选择的照片
        that.setData({
          imgList: list
        })
      }
    })
  },
  previewImg: function(event){
    var imgsrc = event.target.dataset.src;
    var previewIndex = this.data.imgList.indexOf(imgsrc);
    this.setData({
      previewIndex:previewIndex,
      previewMode:true
    })
  },
  leavePreviewImg: function(){
    this.setData({
      previewIndex: 0,
      previewMode:false
    })
  },
  onLoad: function () {
     
  }
})