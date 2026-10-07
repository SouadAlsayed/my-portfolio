function SectionHeader({ widthClass }: { widthClass: string }) {
  return (
    <div className="flex flex-1 items-center gap-3 mr-3">
      <h1 className="text-2xl sm:text-3xl text-white">
        <span className="text-primary">#</span>projects
      </h1>
      <div className={`${widthClass} h-px bg-primary`} />
    </div>
  );
}

export default SectionHeader;
