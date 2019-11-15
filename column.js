const Column = {
  idCounter: 3,
  dragged: null,

  process (columnElement){
    const spanAction_addNote = columnElement.querySelector('[data-action-addNote]');
    spanAction_addNote.addEventListener('click', function (event) {
      let noteElement = Note.create();
      
      columnElement.querySelector('[data-notes]').append(noteElement); 
      Note.process(noteElement);  
      
      noteElement.setAttribute('contenteditable', 'true');
      noteElement.focus();
    })

    const headerElement = columnElement.querySelector('.column-header');
    headerElement.addEventListener('dblclick', function(event){
      headerElement.setAttribute('contenteditable', 'true');
      headerElement.focus();
    })

    headerElement.addEventListener('blur', function (event) {
      headerElement.removeAttribute ('contenteditable');
    })

    columnElement.addEventListener('dragover', function(event){
    event.preventDefault();
    })

    columnElement.addEventListener('drop', function(event){
      if (Note.dragged) {
        return columnElement.querySelector('[data-notes]').append(Note.dragged);
      }
    })
  columnElement.addEventListener('dragstart', Column.dragstart)
  columnElement.addEventListener('dragend', Column.dragend)
  columnElement.addEventListener('dragenter', Column.dragenter)
  columnElement.addEventListener('dragover', Column.dragover)
  columnElement.addEventListener('dragleave', Column.dragleave)
  columnElement.addEventListener('drop', Column.drop)
  },
  dragstart (event){
    Note.dragged = this;
    this.classList.add('dragged');
  },  
  dragend (event){
    Note.dragged = null;
    this.classList.remove('dragged');
  },
  dragenter (event){

  },
  dragover (event){

  },
  dragleave (event){

  },  
  drop (event){

  },  
}