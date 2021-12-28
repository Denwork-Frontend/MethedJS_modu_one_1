# git-config

it config --global user.name “Прокопенко Денис”
git config --global user.email “Deniss_2005@ukr.net”

git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global init.defaultBranch main # Ветка по умолчанию

git init -инициализация gitc diff --color-words репозитория
git status -текущее состояние репозитория
git add . добавить все файлы из корня в трек
git add index.html - добавить в трек (отслеживаемые) файл или папку


{
  const nameProduct = "сметана";
  const productQuantity = 50;
  const productCategory = "молочные продукты";
  const productPrice = 30;
  console.log(
    `Общая сумма товара из категории ${productCategory}, а именно ${nameProduct} равна ${
      productQuantity * productPrice
    } руб`
  );
}