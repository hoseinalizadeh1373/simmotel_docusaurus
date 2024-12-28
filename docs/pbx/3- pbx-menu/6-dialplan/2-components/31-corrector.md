---
sidebar_label: "Corrector"
---



# Corrector


## کاربرد

اگر با کامپوننت‌‌های Extension و Trunk کارکرده باشید احتمالا پارامترهای Skip و Prefix را می‌شناسید. آنجا با استفاده از این پارامترها شماره واردشده را تغییر می‌دادیم تا به شماره مورد نیاز ما تبدیل گردد. این تغییرات به همان کامپوننت محدود بود و در کامپوننت بعدی شماره واردشده تغییر نمی‌کرد. کامپوننت Corrector رفتار مشابهی روی شماره واردشده، کالر آیدی تماس‌گیرنده و نام تماس‌گیرنده انجام می‌‌دهد، با این تفاوت که این تغییرات پایدار می‌شود و در ادامه مسیر تماس، داده‌‌های تغییریافته مورد استفاده قرار می‌گیرند.

:::tip نکته
اینجا منظور از Extension عددی است که توسط تماس‌گیرنده شماره‌‌گیری شده است.
:::


## پارامترها کامپوننت

- **Caller ID**: با مقداردهی به این پارامتر، caller_id جدیدی برای تماس‌گیرنده تعریف می‌‌شود.

- **Caller ID Skip**: برای تعیین تعداد رقم‌‌هایی است که باید از ابتدای caller_id تماس‌‌گیرنده حذف گردند.

- **Caller ID Prefix**: برای افزودن عدد درج‌شده در این گزینه قبل از caller_id تماس‌‌گیرنده است.

- **Caller Name**: با مقداردهی به این پارامتر نام جدیدی برای تماس‌گیرنده تعریف می‌‌شود.

- **Caller Name Skip**: برای تعیین تعداد کاراکترهایی است که باید از ابتدای نام تماس‌‌گیرنده حذف گردند.

- **Caller Name Prefix**: برای افزودن عدد درج‌شده در این گزینه قبل از نام تماس‌‌گیرنده است.

- **Extension**: با مقداردهی به این پارامتر، شماره واردشده تغییر می‌‌کند.

- **Extension Skip**: برای تعیین تعداد رقم‌‌هایی است که باید از ابتدای شماره واردشده حذف گردد.

- **Extension Prefix**: برای افزودن عدد درج‌شده در این گزینه قبل از شماره واردشده است.

- **Set Extension on DID**:مقدار وارد شده در Extension را به عنوان DID قرار می‌دهد.