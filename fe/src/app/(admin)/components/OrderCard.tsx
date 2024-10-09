"use client";

type OrderCardProps = {
  image: string;
  title: string;
  createdAt: string;
  product_id: string;
  qty: number;
  price: number;
  total: number;
};

export const OrderCard = ({
  image,
  title,
  createdAt,
  product_id,
  qty,
  price,
  total,
}: OrderCardProps) => {
  return (
    <div className="bg-[#f0f1f3] rounded-xl h-[156px] w-full flex">
      <div>
        <img
          src={image}
          alt={title}
          className="h-[156px] w-[170px] object-cover rounded-xl"
        />
      </div>
      <div className="space-y-2 p-6 w-full">
        <h1 className="text-2xl font-semibold">{title} HOODIE</h1>
        <div>
          <p>{createdAt}</p>
          <p className="text-xs text-gray-600">
            Бүтээгдэхүүний ID:{product_id}
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            Тоо ширхэг: {qty}*₮{price}
          </p>
          <p className="font-semibold">₮500{total}</p>
        </div>
      </div>
    </div>
  );
};
