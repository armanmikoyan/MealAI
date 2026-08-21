import { SNAP } from './constants';
import { SnapSubtitle } from './snap-subtitle';
import { SnapUploadPanel } from './snap-upload-panel';

export default function Snap() {
  return (
    <section className="border-edge/60 flex flex-1 flex-col border-b bg-canvas py-8 sm:py-10 lg:py-12">
      <div className="layout-page-shell flex flex-1 flex-col">
        <header>
          <h1 className="text-content font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {SNAP.TITLE}
          </h1>
          <SnapSubtitle />
        </header>

        <div className="mt-8 flex min-h-0 flex-1 flex-col md:mt-10">
          <SnapUploadPanel />
        </div>
      </div>
    </section>
  );
}
