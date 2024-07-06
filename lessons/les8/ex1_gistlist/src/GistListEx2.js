import React, { Component } from 'react';
import axios from 'axios';

class GistList extends Component {
    state = {
        gists: []
    };

    componentDidMount() {
        // Запрос для получения списка gists
        axios.get('https://api.github.com/gists')
            .then(response => {
                // Обновляем состояние с полученными данными
                this.setState({ gists: response.data });
            })
            // Обработка ошибки при запросе
            // Выводим сообщение об ошибке в консоль
            .catch(error => {
                console.error('Error fetching gists:', error);
            });
    }

    render() {
        const { gists } = this.state;

        return (
            <div>
                <h2>GitHub Gists</h2>
                <ul>
                    {gists.map(gist => (
                        <li key={gist.id}>
                            <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
                                {gist.description || 'No description'}</a>
                            <p>Created by {gist.owner.login}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default GistList;
