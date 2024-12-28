---
sidebar_position: 1

---
# Introduction and Settings

## Simotel API

SA is a collection of APIs that are initiated by sending a request from the web service to Simotel. This service is created using the standard RestAPI format. For example, by sending a two-way call request from the web service to Simotel, the contact center will begin establishing the two-way call once the request is received.

## Simotel API Setup

- **Create an account for the requester.**
- **Define the IPs allowed to send requests.**

### Creating an Account
Go to `Maintenance > API Accounts`. By clicking on ➕, you can create a new user. The parameters in this section are as follows:

- **Authentication**: Simotel uses various methods for user authentication. The most secure method is to use BasicAuth (username and password) along with an API Key (Token).
  
- **Username**: The username for the created user.

- **Password**: The password for the created user.

- **Token**: A string generated for stronger authentication.

- **Enabled**: Allows you to activate or deactivate the user.

- **Request**: Specifies the level of access the user has to the APIs. For example, if a user needs to add a user via the API, the `/pbx/users/add` permission must be enabled.

### Granting Access for IPs
Go to `Maintenance > Settings`. At the bottom of the page, in the Simotel API section, you will see two options:

- **Allow All IPs**: Enabling this option allows all IPs to send requests to Simotel.

- **Allowed IPs**: If you want to allow specific IPs, enter them here and then press Enter.

## Authentication

**Authentication can be done using one of the following three methods:**

- **HTTP Basic Authentication**: The Basic Authentication standard is a common method for authentication in web services. Retrieving access information with this method is relatively easy due to its lower security, so it is recommended to use it at least over SSL. The username and password are placed in the request header in base64 format as shown below.

```shell
Authorization: Basic dGVzdDpBYTEyMzQ1Ng
```

Basic Auth can also be sent in the URL as follows:
```shell
https://username:password@www.example.com
```

- **API Key**: In this method, which is designed to enhance the security of the previous method and is widely used in APIs, a unique key is generated and added to the request header as follows:
 
```shell
X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG
```

- **HTTP Basic authentication & API Key**: This method uses a combination of the two methods above.

```shell
Authorization: Basic dGVzdDpBYTEyMzQ1Ng

X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG
```


## نمونه‌ Header

```shell
Authorization: Basic dGVzdDpBYTEyMzQ1Ng==
X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG
Content-Type: application/json
```

- **Authorization**: اعتبار سنجی Basic Authentication.
- **X-APIKEY**: اعتبار سنجی API-key.
- **Content-Type**: فرمت بدنه پیام. در تمام درخواست‌ها به غیر از سرویس‌های دانلود و استریم، فرمت بدنه پیام application/json می‌باشد.

## پیام‌های رایج در پاسخ به درخواست

انواع پاسخ هایی که در سرویس‌های SA دریافت می‌شود به شرح زیر است.
<div class="custom-table">
|                                              توضیحات                                             | success |                                                                                        message                                                                                       |           header           |
|:------------------------------------------------------------------------------------------------:|:-------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------:|
|                      سرویس به درستی فراخوانی شد و عملیات به درستی انجام شد.                      |    1    |                                                                                           -                                                                                          |           Ok-200           |
| سرویس به درستی فراخوانی‌شده اما در انجام عملیات خطایی رخ‌داده.خطای مربوطه در قسمت message ذکر شده. |    0    | "corresponding error" such as: This number already exists \Field 'field_name':value is missing \Requested operation failed \This trunk already exists \this queue already exists     |           Ok-200           |
|                                  فرمت محتوی درخواستی صحیح نیست.                                  |    0    |                                                                                Unable to parse content                                                                               |       Bad Request-400      |
|                               هیچ اطلاعات اعتبار‌سنجی وارد نشده‌ است.                               |    0    |                                                                            BasicAuth or ApiKey is missing                                                                            |      Unauthorized-401      |
|                              اطلاعات اعتبارسنجی ناقص یا نامعتبر است.                               |    0    |                                                                            BasicAuth or ApiKey is invalid                                                                            |      Unauthorized-401      |
|                             کلایت اجازه دسترسی به این سرویس را ندارد.                             |    0    |                                                                                 "....";Access denied                                                                                 |        Forbidden-403       |
|                          IP کلاینت اجازه دسترسی به این وب‌سرویس را ندارد.                          |    0    |                                                                                  IP is not permitted                                                                                 |        Forbidden-403       |
|                   آدرس‌دهی اشتباه وارد شده و خطا 404 از سمت آپاچی ارسال شده است.                  |    -    |                                                                                           -                                                                                          |        Not Found-404       |
|                           فایل درخواستی وجود ندارد(در زمان دانلود فایل).                          |    -    |                                                                                           -                                                                                          |        Not Found-404       |
|                     متد درخواستی برای این سرویس مجاز نیست. POST,PUT,DELETE,GET                    |    0    |                                                                                  Method not allowed                                                                                  |   Method Not Allowed-405   |
|                             مقدار content-type موجود در هدر مجاز نیست.                            |    0    |                                                                                Unsupported Media Type                                                                                | Unsupported Media Type-415 |
|                                  سرویس فراخوانی شده وجود ندارد.                                  |    0    |                                                                           Requested service dose not exist                                                                           |     Not Implemented-501    |

</div>

## پارامترهای Pagination

این پارمترها نحوه نمایش اطلاعات بازیابی شده از مرکزتماس را مشخص می‌کنند،از آنجایی که این پارمتر‌ها در اکثر APIهای مربوط به جستجو موجود می‌باشند در اینجا یکبار بصورت جزئی مورد بررسی قرار می‌گیرند.

لیست‌ APIهایی که از این پارامتر‌ها پشتیبانی می‌کنند

۱. **pbx/faxes/**

۲. **voicemails/inbox/**

۳. **reports/quick/**

۴. **reports/cdrreports/queue/**

۵. **reports/queue/**

۶. **reports/queue_details/**

۷. **reports/agent/**

۸. **reports/poll/**

۹. **autodialer/campaigns/**

۱۰. **autodialer/contacts/**

۱۱. **autodialer/groups/**

۱۲. **autodialer/reports/**

### start
مشخص می‌کند از کدام یک(مقدار عددی) از داده‌های بازیابی شده توسط مرکز تماس شروع به ارسال اطلاعات به‌سمت وب‌سرویس بکند.

### count

چه تعداد از داده‌های بازیابی شده توسط مرکزتماس به سمت وب‌سرویس ارسال شود.

### sorting

مرتب سازی داده‌ها براساس کدام ستون و به ترتیب صعودی یا نزولی باشد(مقدار ۱ برابر با صعودی و مقدار ۱- برابر با نزولی می‌باشد).


- **مثال)** بازیابی اطلاعات بخش گروه‌ها به نوحی که

	۱. از ۴امین رکورد،اطلاعات بازیابی شده توسط مرکزتماس به سمت وب‌سرویس ارسال شوند.
	
	۲. بطور کلی ۲ رکورد از داده‌های بازیابی شده بازگردانده شود.
	
	۳. گزارش بازگشتی براساس تاریخ و بصورت صعودی مرتب باشد.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  <Tabs
    defaultValue="usageCode"
    values={[
      {label: 'Example Code Sended from  autodialer/groups/', value: 'usageCode'},
      {label: 'Example Output', value: 'outputCode'},
    ]}>

    <TabItem value="usageCode">
      <Tabs
        defaultValue="Curl"
        values={[
          {label: 'Curl', value: 'Curl'},
        ]}>


        <TabItem value="Curl">
          <details>
            <summary> Show Full Source Code  Curl</summary>
            <br/>

```shell
{
    "alike":"true",
    "conditions":{"name":"","description":""},
    "pagination":{"start":4,"count":2,"sorting":{"date":1}}
}
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
        "pagination": {
            "start": 4,
            "count": 2,
            "sorting": {
                "date": 1
            },
            "total": 17
        },
        "data": [
            {
                "_id": "5cab4ed776c2c0747f3a7f7b",
                "name": "nasim-contact-update-980119",
                "description": "",
                "count": 109,
                "date": "1398-01-19 18:08:31"
            },
            {
                "_id": "5cac595276c2c011a94f4b43",
                "name": "nasimcontact-step2",
                "description": "",
                "count": 101,
                "date": "1398-01-20 13:05:30"
            }
        ]
    }
}

```
    </TabItem>

  </Tabs>


## پارامترهای ضروری و منطقی

درآینده در جداول با ستونی به نام `پارمترهای ضروری[**]/منطقی[*]` مواجه می‌شویم که مقادیر آن مشخص کننده

۱. **پارامترهای ضروری**: حتما باید این مقادیر در درخواست وب‌سرویس به سمت سیموتل ارسال شوند و درغیر اینصورت سیموتل در پاسخ خطا برمی‌گرداند.

۲. **پارامترهای منطقی**: مقادیری که عدم وجودشان در درخواست باعث ایجاد خطا در سیستم نمی‌شود اما منطقی است که باتوجه به درخواست این مقادیر به سمت سیموتل فرستاده شوند.