---

sidebar_label: "بارگزاری فایل صوتی"
title: "بارگزاری فایل صوتی"
---


# Announce Upload

از این سرویس برای بارگذاری فایل صوتی در مرکز‌تماس استفاده می‌شود.پس از بارگذاری مرکزتماس در پاسخ `filename` را سمت وب‌سرویس برمی‌گرداند، از آن در API افزودن فایل‌صوتی استفاده می‌کنید.

## پارامتر‌ها
<div class="custom-table">
|     توضیحات    | داده های تعریف شده |         داده های نمونه         | پارامترهای ضروری[**]/منطقی[*] | پارامترها |
|:--------------:|:------------------:|:------------------------------:|:----------------------:|:---------:|
| مسیر فایل صوتی |          -         | c:users\users\Desktop\file.mp3 |           **           |    file   |
</div>


## نمونه فراخوانی

<!--  -->


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'نمونه کد استفاده', value: 'usageCode'},
      {label: 'نمونه خروجی', value: 'outputCode'},
    ]}>

    <!-- تب نمونه کد استفاده -->
    <TabItem value="usageCode">
      <Tabs
        defaultValue="PHP"
        values={[
          {label: 'PHP', value: 'PHP'},
          {label: 'JS', value: 'JS'},
          {label: 'Curl', value: 'Curl'},
        ]}>

        <!-- کد PHP -->
        <TabItem value="PHP">
      
          <details>
            <summary>نمایش کامل کد PHP</summary>
            <br/>

```php
	<?php

	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'http://192.168.51.20/api/v4/autodialer/announcements/upload',
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => '',
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 0,
	  CURLOPT_FOLLOWLOCATION => true,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => 'POST',
	  CURLOPT_POSTFIELDS => array('file'=> new CURLFILE('/C:/Users/Vsadrnia/Downloads/Record (online-voice-recorder.com).mp3')),
	  CURLOPT_HTTPHEADER => array(
		'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',
		'Authorization: Basic c2FkcjpTYWRyQDEyMw=='
	  ),
	));

	$response = curl_exec($curl);

	curl_close($curl);
	echo $response;
?>
```

          </details>
        </TabItem>

        <!-- کد JS -->
        <TabItem value="JS">
          <details>
            <summary>نمایش کامل کد JS</summary>
            <br/>
```js
	<html>
			<head>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
			</head>
		<body>
			<script>
				var form = new FormData();
				form.append("file", fileInput.files[0], "/C:/Users/Vsadrnia/Downloads/Record (online-voice-recorder.com).mp3");

				var settings = {
				  "url": "http://192.168.51.20/api/v4/autodialer/announcements/upload",
				  "method": "POST",
				  "timeout": 0,
				  "headers": {
					"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",
					"Authorization": "Basic c2FkcjpTYWRyQDEyMw=="
				  },
				  "processData": false,
				  "mimeType": "multipart/form-data",
				  "contentType": false,
				  "data": form
				};

				$.ajax(settings).done(function (response) {
				  console.log(response);
				});
			</script>
		</body>
	</html>
```

          </details>
        </TabItem>

        <TabItem value="Curl">
          <details>
            <summary>نمایش کامل کد Curl</summary>
            <br/>

```bash
	curl --location --request POST 'http://192.168.51.20/api/v4/autodialer/announcements/upload' \
	--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \
	--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \
	--form 'file=@"/C:/Users/Vsadrnia/Downloads/Record (online-voice-recorder.com).mp3"'
```

          </details>
        </TabItem>

      </Tabs>
    </TabItem>

    <TabItem value="outputCode">

```shell
{
    "success": 1,
    "message": "",
    "data": {
        "filename": "file-20200825065434-58826-bbc-farsi-pargarmp3_.wav"
    }
}
```
    </TabItem>

  </Tabs>