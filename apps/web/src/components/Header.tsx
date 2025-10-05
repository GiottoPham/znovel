import { cn } from "../utils/cn";

export const Header = () => {
  return (
    <div className="w-full h-12 bg-black flex flex-row items-center">
      {TABS.map(({ tab, href }, index) => (
        <a
          href={href}
          key={tab}
          className={cn("px-5 py-4 border-l border-l-white", {
            "border-l-0": index === 0,
          })}
        >
          <span className="text-white font-semibold">{tab}</span>
        </a>
      ))}
    </div>
  );
};

const TABS = [
  { tab: "Trang chủ", href: "/" },
  { tab: "Thể loại", href: "/the-loai" },
  { tab: "Top tìm kiếm", href: "/top-tim-kiem" },
];
