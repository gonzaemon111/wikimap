export function PortalPricingPanel() {
  return (
    <section className=''>
      <div className='container mx-auto px-5 py-12 sm:py-24'>
        <div className='mb-20 flex w-full flex-col text-center'>
          <h2 className='mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl'>プランと料金</h2>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
        </div>
        <div className='mx-auto w-full overflow-auto lg:w-2/3'>
          <table className='whitespace-no-wrap w-full table-auto text-left'>
            <thead>
              <tr>
                <th className='title-font rounded-l bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-gray-900 dark:bg-zinc-800 dark:text-white'>
                  プラン
                </th>
                <th className='title-font bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-gray-900 dark:bg-zinc-800 dark:text-white'>
                  ストレージ
                </th>
                <th className='title-font rounded-r bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-gray-900 dark:bg-zinc-800 dark:text-white'>
                  料金[月額]
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='dark:text-slate-50'>
                <td className='px-4 py-3'>Free</td>
                <td className='px-4 py-3'>1 GB</td>
                <td className='px-4 py-3 text-lg text-gray-900 dark:text-white'>￥0</td>
              </tr>
              <tr className='dark:text-slate-50'>
                <td className='px-4 py-3'>Starter</td>
                <td className='px-4 py-3'>15 GB</td>
                <td className='px-4 py-3 text-lg text-gray-900 dark:text-white'>￥900</td>
              </tr>
              <tr className='dark:text-slate-50'>
                <td className='border-t-2 border-gray-200 px-4 py-3'>Pro</td>
                <td className='border-t-2 border-gray-200 px-4 py-3'>25 GB</td>
                <td className='border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900 dark:text-white'>￥1,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
