Page({
  data: {
    imgList: ['http://dayu.oa.com/avatars/echottzhu/profile.jpg?1437197657'],
    previewIndex:0,
    previewMode: false,
    modalHidden: true
  },
  uploadImg: function(){
    var that = this;
    wx.chooseImage({
      count: 9, 
      sourceType: ['album'],
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var list = that.data.imgList;
        var deLength = list.length;
        for(var i = 0;i<tempFilePaths.length;i++){
          list[deLength+i] = tempFilePaths[i];
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
      previewMode:true,
      actionSheetHidden: false
    })
  },
  leavePreviewImg: function(){
    this.setData({
      previewIndex: 0,
      previewMode:false
    })
  },
  getCurrentImg:function(){
    var currentIndex = this.data.previewIndex;
    this.setData({
      previewIndex: currentIndex
    })
  },
  deleteImg:function(event){
    this.setData({
      modalHidden: false
    })
  },
  handlerDelete: function(event){
    this.data.imgList.splice(this.data.previewIndex,1);
    var list = this.data.imgList;
    this.setData({
      imgList:list,
      modalHidden: true
    })
  },
  cancleDelete: function(){
    this.setData({
      modalHidden: true
    })
  },
  onLoad: function () {
     
  }
})