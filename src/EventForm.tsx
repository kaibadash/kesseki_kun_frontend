import * as React from 'react';

class EventForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value="{this.state.title}" placeholder="イベントタイトル" />
        <input type="textarea" value="{this.state.description}" placeholder="概要" />
        <input type="text" value="" placeholder="候補日" />
        <input type="text" value="" placeholder="時間" />
        <input type="text" value="{this.state.due_days}" placeholder="締め切りまでの日数" />
      </form>
    );
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handleSubmit');
  }
}
console.log('EventForm.tsx');
export default EventForm;
