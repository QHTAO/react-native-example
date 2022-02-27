import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Image from 'react-native-scalable-image';
const App = () => {
  const [photo, setPhoto] = useState(null);

  const openCamera = async () => {
    //通过相机拍摄的图像/视频将存储在临时文件夹中，因此随时会被删除，所以不要指望它会持续存在。使用saveToPhotos: true（默认为 false）将文件保存在公共照片中。
    const {assets, didCancel} = await launchCamera({
      title: '选择图片',
      selectionLimit: 1,
      saveToPhotos: true, //将文件保存在公共照片中
      // includeBase64: true, //生成图片的base64字符串
    });
    if (didCancel) return;
    setPhoto(assets[0].uri);

    console.log(assets);
  };

  /*  assets Object
    [
      {
        fileName:
          'rn_image_picker_lib_temp_a4151aef-a80f-4fd8-b10e-8dd12b5e7b07.jpg',
        fileSize: 167121,
        height: 1280,
        type: 'image/jpeg',
        uri: 'file:///data/user/0/com.reactnativeexample/cache/rn_image_picker_lib_temp_a4151aef-a80f-4fd8-b10e-8dd12b5e7b07.jpg',
        width: 960,
      },
    ];
  */

    
  const openImageLibrary = async () => {
    const {assets, didCancel} = await launchImageLibrary({
      title: '选择图片',
      selectionLimit: 1,
    });
    if (didCancel) return;
    setPhoto(assets[0].uri);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginBottom: 6}}>
          <Text>Image</Text>
          {photo && (
            <Image
              width={Dimensions.get('window').width}
              source={{
                uri: photo,
              }}
              onSize={({width, height}) => {
                // 计算图像大小后的回调函数
                console.log({width, height});
              }}
            />
          )}
        </View>
        <View style={{marginBottom: 6}}>
          <Button title="拍照" onPress={openCamera} />
        </View>
        <View style={{marginBottom: 6}}>
          <Button title="图库" onPress={openImageLibrary} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
