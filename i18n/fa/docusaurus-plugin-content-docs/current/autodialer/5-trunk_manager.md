---
sidebar_label: "مدیریت ترانک ها"
---

<head>
  <title>مدیریت ترانک ها | مستندات سیموتل</title>
</head>

# مدیریت ترانک‌ها

ترانک وظیفه اتصال مرکزتماس به شبکه مخابراتی را برعهده دارد، باتوجه به اینکه هدف ارسال تماس انبوه می‌باشد نیاز می‌باشد بر روی ترانک محدودیت‌هایی اعمال کرد. محدودیت‌های مثل حداکثر تعداد تماس خروجی همزمان و ساعات ارسال تماس را در این بخش تعریف کنیم.در نهایت پس از ساخت  Trunk Manager از آن در ساخت کمپین به‌جهت ارسال تماس انبوه استفاده می‌شود.
## پارامترهای Trunk Manager

- **Name**: انتخاب نام برای Trunk Manager در این قسمت انجام می‌شود.

- **Trunk**: نام ترانکی که خروجی تماس را برعهده دارد در این قسمت انتخاب می‌شود.

- **Status**: وضعیت فعال یا غیرفعال بودن Trunk Manager را مشخص می‌کند.

- **Dial Times**: در این قسمت روزهای هفته و ساعاتی که می‌خواهید تماس انبوه داشته باشید را مشخص می‌کنید.

- **Capacity**: این پارامتر حداکثر تعداد کانال اشغالی توسط ماژول تماس انبوه را مشخص می‌کند،برای مثال اگر شما خط E1 تهیه کرده باشید مخابرات 30 کانال در اختیار شما قرار می‌دهد،در اینجا مشخص می‌کنید ماژول تماس انبوه بطور همزمان حداکثر 20 کانال از خط را مشغول کند و 10 کانال دیگر آزاد باشند تا کارکنان مجموعه نیز بتوانند تماس ورودی و خروجی داشته باشند.

- **Dial Interval**: در این قسمت مشخص می‌کنید به ازائ چه فاصله زمانی یک تماس بر روی ترانک ارسال شود،برای مثال در صورتی که این مقدار برابر با پنج باشد، هر پنج ثانیه یک تماس به سمت ترانک فرستاده می‌شود.مقدار این پارمتر برحسب ثانیه می‌باشد.

- **Wait Cache Length**: این پارمتر تعداد داده‌های بازیابی شده از دیتا‌بیس را در هر فراخونی مشخص می‌کند،برای مثال در صورتی که برابر با ۱۰۰ باشد، در هر فراخوانی ۱۰۰ رکورد را از پایگاه‌داده بازیابی می‌کند.مقدار پیش‌فرض مناسب‌ترین مقدار می‌باشد.