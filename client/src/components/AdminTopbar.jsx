function AdminTopbar({ title }) {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold text-slate-800">
        {title}
      </h1>

    </header>
  );
}

export default AdminTopbar;