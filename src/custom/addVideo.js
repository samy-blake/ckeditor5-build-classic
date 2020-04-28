/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

/**
 * https://ckeditor.com/docs/ckeditor5/latest/framework/guides/creating-simple-plugin.html
 */
export default class AddVideo extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add( 'addVideo', locale => {
      const view = new ButtonView( locale );

      view.set( {
          label: 'Insert Video',
          icon: imageIcon,
          tooltip: true
      } );

      // Callback executed once the image is clicked.
      view.on( 'execute', () => {
        const event = new CustomEvent( 'ckeditor-add-video', {
          detail: {
            // eslint-disable-next-line object-shorthand
            editor: editor
          }
        } );
        // eslint-disable-next-line no-undef
        document.dispatchEvent( event );

        // editor.model.change( writer => {
        //   // https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_writer-Writer.html#function-createElement
        //   const imageElement = writer.createElement( 'image', {
        //     src: 'TESTASDASDAS'
        //   } );

        //   console.log(imageElement);

        //   // Insert the image in the current selection location.
        //   editor.model.insertContent( imageElement, editor.model.document.selection );
        // });

        /**
          @HostListener('document:ckeditor-add-video', ['$event', '$event.detail.editor'])
          updateNodes(event, editor) {
              console.log(editor);
          }
         */
      } );

      return view;
    } );
  }
}
