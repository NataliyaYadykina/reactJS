import React from 'react';
import HeaderParametersFilter from './HeaderParametersFilter';

const TrendingFilter = () => {
    return (
        <details className="description__filters__item">
            <HeaderParametersFilter title={'TRENDING NOW'} />
            <div className="description__filters__item-show">
                <form action="#">
                    <label><input type="checkbox" name="trending1" id="trending1" />TRENDING 1</label>
                    <label><input type="checkbox" name="trending2" id="trending2" />TRENDING 2</label>
                    <label><input type="checkbox" name="trending3" id="trending3" />TRENDING 3</label>
                    <label><input type="checkbox" name="trending4" id="trending4" />TRENDING 4</label>
                    <label><input type="checkbox" name="trending5" id="trending5" />TRENDING 5</label>
                </form>
            </div>
        </details>
    );
}

export default TrendingFilter;
