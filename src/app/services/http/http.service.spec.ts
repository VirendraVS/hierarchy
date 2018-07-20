import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { HttpService } from './http.service';
import { TreeNode } from '../../shared/TreeNode';


describe('HttpService', () => {
  //'injected' service reference to be used all througuout the test
  let service: HttpService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
  TestBed.configureTestingModule({
     imports:[HttpClientTestingModule],
     providers: [HttpService]
  });
  service = TestBed.get(HttpService);
  httpMock = TestBed.get(HttpTestingController);
  });



  it('should retrieve the tree structure from the API via GET', inject([HttpService], (service: HttpService) => {
    const dummyTreeNodes: TreeNode[] = [

    ];

    service.list().subscribe(nodes => {
      expect(nodes.length).toBeGreaterThan(0);
      console.log(nodes);
      console.log('Lemgth of the node'+nodes.length);
    });

      const request = httpMock.expectOne(`${service.URL}`);
      expect(request.request.method).toBe('GET');
      request.flush([]);
      httpMock.verify();


    
  }));
});
